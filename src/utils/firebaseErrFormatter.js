// Returns a string which can be shown to user 
// Eg
// err => auth/email-already-in-use
// out => Email already in use

export default function firebaseErrorFormatter(err){
  const str = err.split('/')[1].split('-').join(' ')
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
