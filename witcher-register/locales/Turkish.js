module.exports = new Underline.Locale({
  locale: "tr",
  data: {
    userErrors: {
      coolDown: {
        user: `Bu interaksiyonu sen tekrardan {0} saniye içerisinde kullanabilirsin.`,
        member: `Bu interaksiyonu sen bu sunucuda tekrardan {0} saniye içerisinde kullanabilirsin.`,
        guild: `Bu interaksiyonu bu sunucuda tekrardan {0} saniye içerisinde kullanabilirsin.`,
        channel: `Bu interaksiyonu bu kanalda tekrardan {0} saniye içerisinde kullanabilirsin.`,
        message: `Bu interaksiyonu bu mesajda tekrardan {0} saniye içerisinde kullanabilirsin.`,
        any: `Bu interaksiyonu tekrardan {0} saniye içerisinde kullanabilirsin.`,
      },
      disabled: "Bu interkasiyon kapalı",
      blocked: "Bottan yasaklısınız.",
      guildOnly: "Bu sunuculara özel bir interaksiyon.",
      developerOnly: "Bu interaksiyon sadece bot geliştiricilerine özel",
      guildOwnerOnly: "Bu interaksiyon sadece sunucu sahipleri kullanabilir",
      botPermsRequired: "Botun bu komutu kullanması için {0} yetkilerine ihtiyacı vardır.",
      userPermsRequired: "Bu komutu kullanmak için {0} yetkilerine ihtiyacın var.",
    },
    example: {
      success: "✔ Yeniden yükleme işlemi başarılı.",
      error: "Malesef {0} sunucusunda paylaşılamadı..."
    },
    kayıt: {
      yetkiYok: "Bu komutu kullanmak için gerekli yetkiye sahip değilsin.",
      zatenKayıtlı: "Belirtilen üye daha önceden kayıt edilmiş.",
      kayıtMesaj1: "Cinsiyet seçmek için 20 saniyeniz var aksi takdirde işlem iptal edilecektir.",
      kayıtMesaj2: "{0} adlı kullanıcının kaydını tamamlamak için cinsiyet seçimi yapmalısınız. Cinsiyet seçmek için butonları kullanabilirsiniz.",
      kayıtBasarili: "{0} üyesi başarılı bir şekilde {1} olarak kayıt edildi.",
      rolPosition: "Belirtilen üyenin ismini değişemezsiniz.",
      isimDegistirildi: "{0} üyesinin kullanıcı adı {1} olarak değiştirildi.",
      kayıtsızBasarili: "{0} üyesi başarılı bir şekilde kayıtsıza atıldı.",
      ztnKayıtsız: "Belirtilen üye zaten kayıt olmamış.",
      hosgeldinMesaj: "{0} The Witcher'a hoş geldin",
    }
  }
});
