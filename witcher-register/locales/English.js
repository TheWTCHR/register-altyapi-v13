module.exports = new Underline.Locale({
  locale: "en",
  data: {
    userErrors: {
      coolDown: {
        user: `You can use this interaction in {0} seconds.`,
        member: `You can use this interaction in {0} seconds in this guild.`,
        guild: `This interaction can be used again in {0} seconds in this guild.`,
        channel: `This interaction can be used again in {0} seconds in this channel.`,
        message: `This interaction can be used again in {0} seconds in this message.`,
        any: `You can use this interaction in {0} seconds.`,
      },
      disabled: "This interaction is disabled.",
      guildOnly: "This is a guild only interaction.",
      blocked: "You are banned from the bot.",
      developerOnly: "This is a developer only interaction.",
      guildOwnerOnly: "This is a guild owner only interaction.",
      botPermsRequired: "Bot needs {0} permissions to run this interaction.",
      userPermsRequired: "You need {0} permissions to run this interaction.",
    },
    example: {
      success: "Succesfuly done.",
      error: "Sorry for guild {0}, i couldnt publish..."
    },
    kayıt: {
      yetkiYok: "You do not have the necessary privileges to use this command.",
      zatenKayıtlı: "The specified member has already been registered.",
      kayıtMesaj1: "You have 20 seconds to choose gender, otherwise the transaction will be cancelled.",
      kayıtMesaj2: "To complete {0} registration, you must select a gender. You can use the buttons to choose gender.",
      kayıtBasarili: "{1} has been successfully registered as {0} as a member.",
      rolPosition: "You cannot change the name of the specified member.",
      isimDegistirildi: "Username of {0} has been changed to {1}.",
      kayıtsızBasarili: "{0} has been successfully unregistered.",
      ztnKayıtsız: "The specified member is not registered yet.",
      hosgeldinMesaj: "{0} Welcome to The Witcher",
    }
  }
});
