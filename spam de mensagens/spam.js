async function enviarScript(msg, num = 0) {
  (main = document.querySelector("#main")),
    (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error("Não há uma conversa aberta");

  console.log(msg, num);

  for (let i = 0; i < num; i++) {
    console.log(msg);

    textarea.focus();
    document.execCommand("insertText", false, msg);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      (
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click();
    }, 100);

    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

enviarScript(`Oi`, 10)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
