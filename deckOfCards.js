$.ajax({
  type: "GET",
  url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
  success: (response) => {
    console.log(response);
    let deck = response.deck_id;
    $.ajax({
      type: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`,
      success: (response2) => {
        console.log(response2);
        console.log(response2.cards[0].value + " of " + response2.cards[0].suit);
        $("img").attr("src", response2.cards[0].image);
      }
    });
  }
});
