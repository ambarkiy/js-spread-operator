// cloner un objet
var profil = { 'nom': 'Donald', 'prenom': 'Trump',  };
var profilCloner = { ...profil };

console.log(profilCloner);//{ nom: 'Donald',prenom: 'Trump',fonction: 'Président des Etats Unis' }

var profilMisAJour = { 'nom': 'Donald', 'prenom': 'Trump', 'fonction': 'Chomage' };

var fusion = { ...profil, ...profilMisAJour };
console.log(fusion);
