const help = (prefix) => {
	return `

BOT PELO CANAL MS PLAY

Canal MS PLAY: https://www.youtube.com/msplay
Site oficial do bot do canal MS PLAY: http://whatsbot.xyz/
	
*COMANDOS PRA FIGURINHAS:*

Comandos: *${prefix}sticker* ou *${prefix}stiker*
Desc: converter imagem / gif / vídeo em figurinha
Uso: Eniar ou responder imagem/gif/vídeo com legenda a *${prefix}sticker*\n
Comando : *${prefix}toimg*
Desc: Converte uma figurinha em imagem
Uso: Responda a figurinha com *${prefix}toimg*\n

*COMANDOS PARA USAR EM GRUPOS:*

Comando : *${prefix}welcome [1/0]*
Desc: Ativa o mode de boas vinda para o grupo
Uso: * ${prefix}bemvindo 1 ou 0* \n
Comando : *${prefix}add*
Desc: Adciona membro ao grupo
Uso: *${prefix} add 62813xxxxx* \n
Observação: Só pode ser usado se o bot for administrador do grupo \n
Comando : *${prefix}kick*
Desc: Expulsa membro do grupo
Uso: *${prefix} kick @[membro do grupo]* \n
Observação: Só pode ser usado se o bot for administrador do grupo \n
Comando : *${prefix}promote*
Desc: Torna um membro administrador do grupo
Observação: Só pode ser usado se o bot for administrador do grupo \n
Uso: *${prefix}promote @[numero do membro]* \n
Observação: Só pode ser usado se o bot for administrador do grupo \ n
Comando : *${prefix}demote*
Desc: Retirar cargo de administrador do grupo
Uso: *${prefix}demote @[mumero do membro]* \n
Observação: Só pode ser usado se o bot for administrador do grupo \n
Comando : *${prefix}linkgroup*
Desc: Retorna o link de convite do grupo
Uso: Basta enviar o comando
Comando : *${prefix}leave*
Desc: Use este comando para o bot sair do grupo
Uso: Basta enviar o comando
Nota: Só pode ser usado por administradores do grupo ou o dono no bot\n
Comando : *${prefix}tagall*
Desc: Marca todos os membros do grupo, inclusive administradores
Uso: Basta enviar o comando
Nota: Este comando só pode ser usado se você for administrador do grupo
Comando : *${prefix}tagall2*
Desc: Marca todos os membros do grupo, inclusive administradores
Uso: Basta enviar o comando
Nota: Este comando só pode ser usado se você for administrador do grupo
comando : *${prefix}tagall3*
Desc: Marca todos os membros do grupo, inclusive administradores
Uso: Basta enviar o comando
Nota: Este comando só pode ser usado se você for administrador do grupo

*PARA O DONO DO BOT:*

Comando : *${prefix}bc*
Desc: Transmissão
Uso: *${prefix}bc [texto] * \nexemplo: *${prefix}bc sua mensagem*
Nota: Este comando só pode ser usado pelo proprietário do bot \n
Comando : *${prefix}setprefix*
Desc: substituir prefixo
Uso: *${prefix} setprefix [texto | opcional] * \ nexemplo: * $ {prefix}setprefix ?*
Nota: Este comando só pode ser usado pelo proprietário do bot \n\n
`
}

exports.help = help
