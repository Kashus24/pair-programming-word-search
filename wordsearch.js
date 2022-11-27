const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let vertCheck = [];

    for (i = 0; i < letters[0].length; i++) {
        let pillar = [];

        for (x = 0; x < letters.length; x++) {
            pillar.push(letters[x][i]);
        }
        vertCheck.push(pillar);
    }

    vertCheck = vertCheck.map((ls) => ls.join(''));
        for (const l of vertCheck) {
        if (l.includes(word)) return true;
    }
    
    return false;
  };


 
module.exports = wordSearch;
