function showRepositories() {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}
<<<<<<< HEAD

=======
 
>>>>>>> 12f8274ca24c7f4fd08733615ef63d1cc2a3fdc7

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
