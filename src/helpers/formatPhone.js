const formatPhone = (phone) => {
  let cleaned = ('' + phone).replace(/\D/g, '');

  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return null;
};

export default formatPhone;
