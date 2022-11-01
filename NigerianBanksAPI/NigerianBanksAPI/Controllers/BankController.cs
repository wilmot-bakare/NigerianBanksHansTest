using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NigerianBanksAPI.Data;
using System.Text;

namespace NigerianBanksAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        private readonly DataContext _context;

        public BankController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Bank>>> GetBanks()
        {
            return Ok(await _context.Banks.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Bank>>> CreateBank(Bank bank)
        {

            BankValidator validator = new BankValidator();
            ValidationResult results = validator.Validate(bank);

            if (!results.IsValid)
            {
                StringBuilder sb = new StringBuilder();
                foreach (var failure in results.Errors)
                {
                    sb.Append("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
                }

                return BadRequest(sb);
            }

            _context.Banks.Add(bank);
            await _context.SaveChangesAsync();

            return Ok(await _context.Banks.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Bank>>> UpdateBank(Bank bank)
        {
            BankValidator validator = new BankValidator();
            ValidationResult results = validator.Validate(bank);

            if (!results.IsValid)
            {
                StringBuilder sb = new StringBuilder();
                foreach (var failure in results.Errors)
                {
                    sb.Append("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
                }

                return BadRequest(sb);
            }

            var foundBank = await _context.Banks.FindAsync(bank.Id);
            if (foundBank == null)
                return BadRequest("Bank not found");

            foundBank.Name = bank.Name;
            foundBank.City = bank.City;
            foundBank.Code = bank.Code;
            foundBank.Slogan = bank.Slogan;

            await _context.SaveChangesAsync();

            return Ok(await _context.Banks.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Bank>>> DeleteBank(int id)
        {

            var foundBank = await _context.Banks.FindAsync(id);
            if (foundBank == null)
                return BadRequest("Bank not found");
             _context.Banks.Remove(foundBank);
            await _context.SaveChangesAsync();

            return Ok(await _context.Banks.ToListAsync());
        }
    }
}
