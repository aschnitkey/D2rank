// Set name on emblem
$('.gamertagText').on('keyup', function() {
	const gamertagValue = $(this).val();
	if (gamertagValue.length > 0) {
		$('p.gtag').text(gamertagValue);
	} else {
		gamertagValue = 'r0ckking';
	}
});

// Change rank value based on outcome

var pvpRank = 0;

$('.button-win').on('click', function() {
	pvpRank = (pvpRank + 5);
	$('.rank p').text(pvpRank);
});

$('.button-lose').on('click', function() {
	pvpRank = (pvpRank - 3);
	$('.rank p').text(pvpRank);
});