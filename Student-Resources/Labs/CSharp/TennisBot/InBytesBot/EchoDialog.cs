[Serializable]
public class EchoDialog : IDialog<object>
{
    public async Task StartAsync(IDialogContext conTtext)
    {
        context.Wait(MessageReceivedAsync);
    }
    public async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> argument)
    {
        var message = await argument;
        await context.PostAsync("You said: " + message.Text);
        context.Wait(MessageReceivedAsync);
    }
}