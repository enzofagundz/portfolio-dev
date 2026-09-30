import { site } from '~/data/site'

export function useContact() {
  const config = useRuntimeConfig()

  const whatsappNumber = String(config.public.whatsappNumber ?? '').replace(/\D/g, '')
  const email = String(config.public.contactEmail ?? '').trim()

  // O contato é gravado no HTML durante o build (páginas pré-renderizadas).
  // Variáveis de runtime do Worker não alteram o HTML já gerado.
  if (import.meta.prerender && (!whatsappNumber || !email)) {
    const missing = [
      !whatsappNumber && 'NUXT_PUBLIC_WHATSAPP_NUMBER',
      !email && 'NUXT_PUBLIC_CONTACT_EMAIL',
    ]
      .filter(Boolean)
      .join(' e ')
    const message = `Contato não configurado: defina ${missing} no .env (ou nas variáveis de build do Cloudflare) antes de gerar o site.`
    console.error(`[contato] ${message}`)
    throw createError({ statusCode: 500, statusMessage: message })
  }

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
    : ''

  return {
    hasWhatsapp: Boolean(whatsappNumber),
    hasEmail: Boolean(email),
    whatsappHref,
    mailtoHref: email ? `mailto:${email}` : '',
    email,
    contactHref: whatsappHref || '#contato',
    contactExternal: Boolean(whatsappHref),
  }
}
