const { Util, MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
const util = require("util");
const client = Underline.client;
const config = Underline.config;

module.exports = new Underline.SlashCommand({
  name: ["kayıt"],
  description: "Üyeyi kaydetmenizi sağlar.",
  async onInteraction(inter, other) {
    let member = inter.options.getMember("member", true);
    try {
        if(!inter.member.roles.cache.get(Underline.other.kayıtYetkili)) return inter.reply({content: other.locale.kayıt.yetkiYok(), ephemeral: true})
        if(member.roles.highest.position >= inter.member.roles.highest.position) return inter.reply({ content: other.locale.kayıt.rolPosition()})
        let ebutton = new MessageButton().setCustomId("erkek").setEmoji("♂").setStyle("PRIMARY")
        let kbutton = new MessageButton().setCustomId("kız").setEmoji("♀").setStyle("DANGER")
        let buttons = new MessageActionRow().addComponents(ebutton, kbutton)
        if(config.other.erkekRol.some(e => member.roles.cache.get(e)) || config.other.kızRol.some(k => member.roles.cache.get(k))) {
            inter.reply({ content: other.locale.kayıt.zatenKayıtlı(), ephemeral: true})
        } else {
            inter.reply({ content: other.locale.kayıt.kayıtMesaj1(), ephemeral: true})
            let m = await inter.channel.send({ embeds: [new MessageEmbed().setAuthor({ iconURL: inter.user.avatarURL({dynamic:true}), name: inter.user.username}).setDescription(other.locale.kayıt.kayıtMesaj2(member)).setFooter({ text: "The Witcher"}).setColor("AQUA")], components: [buttons]})
            const filter = (interaction) => interaction.user.id == inter.user.id;
            let collector = m.createMessageComponentCollector({ filter, componentType: 'BUTTON', max: 1, time: 30000 })
            collector.on("collect", async (button) => {
                if(button.customId == "erkek") {
                  member.roles.add(Underline.other.erkekRol, "Witcher Register")
                  setTimeout(() => member.roles.remove(Underline.other.kayıtsızRol, "Witcher Register"), 500)
                  button.reply({ content: other.locale.kayıt.kayıtBasarili(member, "erkek"), ephemeral: true})
                } else if(button.customId == "kız") {
                  member.roles.add(Underline.other.erkekRol, "Witcher Register")
                  setTimeout(() => member.roles.remove(Underline.other.kayıtsızRol, "Witcher Register"), 500)
                  button.reply({ content: other.locale.kayıt.kayıtBasarili(member, "kız"), ephemeral: true})              
                }
              })
              collector.on("end", async button => {
                  m.delete()
              });
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
      description: "Kayıt edilecek üye",
      name: "member",
      type: "USER",
      required: true
    }
  ]
})