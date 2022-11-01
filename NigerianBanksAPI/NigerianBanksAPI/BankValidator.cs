using FluentValidation;
namespace NigerianBanksAPI
{
    public class BankValidator : AbstractValidator<Bank>
    {
        public BankValidator()
        {
            RuleFor(bank => bank.Name).NotEmpty().WithMessage("Please specify a bank name");
            RuleFor(bank => bank.Code).NotEmpty().WithMessage("Please specify a bank code");
            RuleFor(bank => bank.City).NotEmpty().WithMessage("Please specify a bank city");
            RuleFor(bank => bank.Slogan).NotEmpty().WithMessage("Please specify a bank Slogan");
        }
    }
}
