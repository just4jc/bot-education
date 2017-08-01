using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
namespace TennisBot
{
    [Serializable]
    public class SimpleDialog : IDialog
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(ActivityReceivedAsync);
        }

        public async Task ActivityReceivedAsync(IDialogContext context, IAwaitable<object> result)
        {
            var activity = await result as Activity;

            String text = activity.Text;
            if (text.Contains("-"))
            {
                String[] stringTokens = text.Split('-');
                if (stringTokens.Length == 2)
                {
                    int intScore = 0;
                    if (int.TryParse(stringTokens[0], out intScore))
                    {
                        if (intScore >= 6)
                            await context.PostAsync("Yaaay");
                        else if (intScore > 4)
                            await context.PostAsync("We are making good progress");
                        else if (intScore > 2)
                            await context.PostAsync("We are making progress");
                        else if (intScore >= 0)
                            await context.PostAsync("We are playing OK");
                    }
                }
            }


            context.Wait(ActivityReceivedAsync);
        }
    }
}