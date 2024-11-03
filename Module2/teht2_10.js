'use strict';

const candidate_maker = (candidate_list, name_of_candidate) => {
  const politician = {
    nimi: name_of_candidate,
    votes: 0,
  };
  candidate_list.push(politician);
};

const poll = (voted_person) => {
  for (let index = 0; index < all_candidates.length; index++) {
    if (voted_person === all_candidates[index]['nimi']) {
      all_candidates[index]['votes']++;
    }
  }
};

let all_candidates = [];

let number_of_candidates = +prompt('Give a number of candidates.');

let candidates_made = 0;

while (candidates_made < number_of_candidates) {
  candidates_made++;
  let candidate_name = prompt(`Give a name for 
  ${candidates_made}. candidate.`);
  candidate_maker(all_candidates, candidate_name);
}

let num_of_voters = +prompt('Give a number of voters.');

let time_voted = 0;

while (time_voted < num_of_voters) {
  time_voted++;
  poll(prompt(`Who is ${time_voted}. voter would vote?`));
}

all_candidates.sort((a, b) => {
  return b.votes - a.votes;
});

console.log(
    `The winner is ${all_candidates[0]['nimi']} with ${all_candidates[0]['votes']} votes.
Results: `);
for (let print = 0; print <= all_candidates.length - 1; print++) {
  console.log(
      `${all_candidates[print]['nimi']}: ${all_candidates[print]['votes']} votes`);
}