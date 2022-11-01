using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NigerianBanksAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Bank>>> GetBanks()
        {
            return new List<Bank> {
                new Bank
                {
                    Id = 1,
                    Name="Sterling Bank Plc",
                    Code="STB",
                    City="Lagos",
                    Slogan="One Customer Bank"
                }
                
                };
        }
    }
}
