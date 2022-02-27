const { Util, MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
const util = require("util");
const client = Underline.client;
const config = Underline.config;

module.exports = new Underline.SlashCommand({
  name: ["kayıtsız"],
  description: "Üyeyi kayıtsıza atmanızı sağlar.",
  async onInteraction(inter, other) {
    let member = inter.options.getMember("member", true);
    try {
        if(!inter.member.roles.cache.get(Underline.other.kayıtsızYetkili)) return inter.reply({content: other.locale.kayıt.yetkiYok(), ephemeral: true})
        if(member.roles.highest.position >= inter.member.roles.highest.position) return inter.reply({ content: other.locale.kayıt.rolPosition()})
        if(config.other.kayıtsızRol.some(e => member.roles.cache.get(e))) {
            inter.reply({ embeds: [new MessageEmbed().setAuthor({ iconURL: inter.user.avatarURL({dynamic:true}), name: inter.user.username}).setDescription(other.locale.kayıt.kayıtsızBasarili(member)).setFooter({ text: "The Witcher"}).setColor("GREEN")], components: [buttons]})
            member.roles.setRole(Underline.other.kayıtsızRol, "Witcher Register")
        } else {
            inter.reply({ content: other.locale.kayıt.ztnKayıtsız(), ephemeral: true})
        }
    } catch (err) {
        console.error(err)
    }
  },
  perms: {
    user: ["DEVELOPER"],
  },
  options: [
    {
      description: "Kayıtsıza atılacak üye",
      name: "member",
      type: "USER",
      required: true
    }
  ]
})