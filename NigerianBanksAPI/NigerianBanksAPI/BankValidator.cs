using FluentValidation;
namespace NigerianBanksAPI
{
    public class BankValidator : AbstractValidator<Bank>
    {
        public BankValidator()
        {
            RuleFor(bank => bank.Name).NotNull();
            RuleFor(bank => bank.Code).NotNull();
            RuleFor(bank => bank.City).NotNull();
            RuleFor(bank => bank.Slogan).NotNull();
        }
    }
}
