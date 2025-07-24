export function getAnimationDelay(index: number, base: number = 0.2) {
  return `${index * base}s`;
}

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export function formatPhoneNumber(phone: string) {
  // Exemplo: transforma 43999108255 em (43) 99910-8255
  if (!phone) return "";
  return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
}
