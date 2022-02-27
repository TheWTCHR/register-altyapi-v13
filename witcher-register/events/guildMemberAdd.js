const client = Underline.client;

module.exports = new Underline.Event({
    id: "hosgeldin",
    eventName: "guildMemberAdd",
    onEvent(member, other) {
        let kanal = client.channels.cache.get(Underline.other.hgMesajKanal)
      if(!kanal) return console.log("Kanal bulunamadı.")
      kanal.send(other.locale.kayıt.hosgeldinMesaj(member))
    },
    // Olay çalışmaya hazır olduğunda bot açılırken
    // sadece bir kereliğine çağrılır. Opsiyonel
    onLoad(client) {
      // Normal discord.js client objesi.
      client;
    },
    // Event açıkmı kapalı mı?
    // Opsiyonel. Varsayılan değer false.
    disabled: false
  });