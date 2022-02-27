const { Util, MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
const util = require("util");
const client = Underline.client;
const config = Underline.config;

module.exports = new Underline.SlashCommand({
  name: ["isim"],
  description: "Üyeyi kaydetmenizi sağlar.",
  async onInteraction(inter, other) {
    let member = inter.options.getMember("member", true);
    let isim = inter.options.getString("isim", true)
    try {
        if(!inter.member.roles.cache.get(Underline.other.isimYetkili)) return inter.reply({content: other.locale.kayıt.yetkiYok(), ephemeral: true})
        if(member.roles.highest.position >= inter.member.roles.highest.position) return inter.reply({ content: other.locale.kayıt.rolPosition()})
        inter.reply({ content: other.locale.kayıt.isimDegistirildi(member, isim) })
        member.setNickname(isim)
    } catch (err) {
        console.error(err)
    }
  },
  perms: {
    user: ["DEVELOPER"],
  },
  options: [
    {
      description: "İsmi değiştirilecek üye",
      name: "member",
      type: "USER",
      required: true
    },
    {
        description: "Yapılacak isim",
        name: "isim",
        type: "STRING",
        required: true
    }
  ]
})