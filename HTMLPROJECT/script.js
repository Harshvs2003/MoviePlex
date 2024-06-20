function showDetails(movie) {
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = `<h2>${movie}</h2><p>Details about ${movie}</p>`;
    document.getElementById('movie-details').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('movie-details').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    const movieDetails = {
        "Eternals": {
            genre: "Action, Adventure, Fantasy",
            rating: "PG-13",
            description: "Following the events of 'Avengers: Endgame,' the Eternals, an immortal alien race created by the Celestials, emerge from hiding after thousands of years to protect Earth from their evil counterparts, the Deviants.",
            cast: ["Gemma Chan as Sersi", "Richard Madden as Ikaris", "Angelina Jolie as Thena", "Kumail Nanjiani as Kingo", "Salma Hayek as Ajak"]
        },
        "Joker": {
            genre: "Crime, Drama, Thriller",
            rating: "R",
            description: "Arthur Fleck, a failed stand-up comedian, descends into madness as he transforms into the criminal mastermind known as the Joker. Set in Gotham City, the film explores the character's psychological journey and the events that lead to his notorious rise.",
            cast: ["Joaquin Phoenix as Arthur Fleck / Joker", "Robert De Niro as Murray Franklin", "Zazie Beetz as Sophie Dumond"]
        },
        "John Wick": {
            genre: "Action, Crime, Thriller",
            rating: "R",
            description: "Retired hitman John Wick seeks vengeance against those who wronged him, triggering a relentless and brutal journey through the criminal underworld. Renowned for its intense action sequences and world-building, the film is a modern action classic.",
            cast: ["Keanu Reeves as John Wick", "Ian McShane as Winston", "Willem Dafoe as Marcus", "Adrianne Palicki as Ms. Perkins"]
        },
        "Multiverse of Madness": {
            genre: "Action, Adventure, Fantasy",
            rating: "PG-13",
            description: "Doctor Stephen Strange teams up with mystical allies old and new to traverse the mind-bending and dangerous alternate realities of the multiverse to confront a mysterious new adversary.",
            cast: ["Benedict Cumberbatch as Doctor Stephen Strange", "Elizabeth Olsen as Wanda Maximoff / Scarlet Witch", "Benedict Wong as Wong", "Rachel McAdams as Dr. Christine Palmer"]
        },
        "Spider-Man No Way Home": {
            genre: "Action, Adventure, Sci-Fi",
            rating: "PG-13",
            description: "Peter Parker's secret identity is revealed to the world, putting his loved ones at risk. Seeking help from Doctor Strange, Peter accidentally unleashes the multiverse, bringing threats from other dimensions.",
            cast: ["Tom Holland as Peter Parker / Spider-Man", "Zendaya as MJ", "Benedict Cumberbatch as Doctor Stephen Strange", "Jacob Batalon as Ned Leeds"]
        },
        "Shang-Chi": {
            genre: "Action, Adventure, Fantasy",
            rating: "PG-13",
            description: "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization. The film blends martial arts action with Marvel's signature storytelling.",
            cast: ["Simu Liu as Shang-Chi", "Awkwafina as Katy", "Tony Leung Chiu-wai as Wenwu / The Mandarin", "Michelle Yeoh as Ying Nan"]
        },
        "The NUN": {
            genre: "Horror, Mystery, Thriller",
            rating: "R",
            description: "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
            cast: ["Taissa Farmiga as Sister Irene", "Demián Bichir as Father Burke", "Jonas Bloquet as Frenchie", "Bonnie Aarons as The Nun"]
        },
        "The Marvels": {
            genre: "Action, Adventure, Sci-Fi",
            rating: "PG-13",
            description: "Captain Marvel, Ms. Marvel, and Monica Rambeau team up to save the universe from a powerful cosmic threat. The film explores the interconnected stories of these superheroes and their roles in the larger Marvel Cinematic Universe.",
            cast: ["Brie Larson as Carol Danvers / Captain Marvel", "Iman Vellani as Kamala Khan / Ms. Marvel", "Teyonah Parris as Monica Rambeau"]
        },
        "Thor": {
            genre: "Action, Adventure, Comedy",
            rating: "PG-13",
            description: "Thor enlists the help of Valkyrie, Korg, and ex-girlfriend Jane Foster to combat Gorr the God Butcher, who intends to make the gods extinct. Jane Foster unexpectedly wields Mjolnir as the Mighty Thor.",
            cast: ["Chris Hemsworth as Thor", "Natalie Portman as Jane Foster / Mighty Thor", "Tessa Thompson as Valkyrie", "Christian Bale as Gorr the God Butcher"]
        },
        "Avengers Endgame": {
            genre: "Action, Adventure, Sci-Fi",
            rating: "PG-13",
            description: "After the devastating events of 'Avengers: Infinity War,' the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe. The epic conclusion to the Infinity Saga.",
            cast: ["Robert Downey Jr. as Tony Stark / Iron Man", "Chris Evans as Steve Rogers / Captain America", "Mark Ruffalo as Bruce Banner / Hulk", "Scarlett Johansson as Natasha Romanoff / Black Widow", "Chris Hemsworth as Thor", "Jeremy Renner as Clint Barton / Hawkeye"]
        }
    };

    window.showDetails = function(movie) {
        const details = movieDetails[movie];
        if (details) {
            const detailsContent = `
                <h2>${movie}</h2>
                <p><strong>Genre:</strong> ${details.genre}</p>
                <p><strong>Rating:</strong> ${details.rating}</p>
                <p><strong>Description:</strong> ${details.description}</p>
                <p><strong>Cast:</strong> ${details.cast.join(', ')}</p>
            `;
            document.getElementById('details-content').innerHTML = detailsContent;
            document.getElementById('movie-details').style.display = 'flex';
        }
    };

    window.closeDetails = function() {
        document.getElementById('movie-details').style.display = 'none';
    };
});


