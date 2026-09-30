import { site } from '~/data/site'

export function useContact() {
  const config = useRuntimeConfig()

  const whatsappNumber = String(config.public.whatsappNumber ?? '').replace(/\D/g, '')
  const email = String(config.public.contactEmail ?? '').trim()

  if (!import.meta.client && (!whatsappNumber || !email)) {
    console.warn('[contato] Defina NUXT_PUBLIC_WHATSAPP_NUMBER e NUXT_PUBLIC_CONTACT_EMAIL no .env')
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
