function greet(iso) {
  switch(iso) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': 'Haai!';
    default: return 'Invalid Code.';
  }
}
function extractLanguage(string) {
  return (string.split('_')[0]);
}
function extractRegion(string) {
  return (string.split('.')[0].split('_')[1]);
}

function localGreet(isoCode) {
  let language = extractLanguage(isoCode);
  let region = extractRegion(isoCode);

  switch (region) {
    case 'US' : 
      console.log('Hey!');
      break;
    case 'GB' :
      console.log('Hello!');
      break;
    case 'AU' :
      console.log('Howdy!');
      break;
    default : 
      console.log(greet(language));
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
localGreet('dd_MA.UTF-8'); // 'Salut!'