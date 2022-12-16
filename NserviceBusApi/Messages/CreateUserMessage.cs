namespace Messages
{
    public class CreateUserMessage : ICommand
    {
      
        public Guid Id { get; set; }

        public string Message { get; set; }

        public CreateUserMessage(Guid id, string message)
        {
            Id = id;
            Message = message;
        }

    }
}