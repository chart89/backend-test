module.exports = (fullName) => {
  if(!fullName) return 'Error';
  if(typeof fullName !== 'string') return 'Error';
  const formatName = fullName.split(' ');
  if(formatName.length > 2) return 'Error';
  const [ firstName, lastName ] = formatName;
  if(!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
