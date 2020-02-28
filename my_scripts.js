
var players = [{name:"Laviska Shenault", img: "https://cdn.theathletic.com/app/uploads/2019/12/04102812/GettyImages-1173460188-e1575473313511-1024x681.jpg", alt:"Image of Player 1", year:"Junior", major:"Film Studies and Ethnic Studies", games_played: 9, pass_yards: 0, rushing_yards: 161, receiving_yards: 764},
				{name:"KD Nixon", img: "https://i1.wp.com/kdvr.com/wp-content/uploads/sites/11/2019/12/gettyimages-1178166436-e1576017112734.jpg?resize=2560%2C1440&ssl=1", alt:"Image of Player 2", year:"Junior", major:"Strategic Communications", games_played: 10, pass_yards: 38, rushing_yards: 15, receiving_yards: 448},
				{name:"Davion Taylor", img: "https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/cubuffs.com/images/2019/11/23/CU_UW_13_9.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 9, pass_yards: 0, rushing_yards: 0, receiving_yards: 0},
				{name:"Steven Montez", img: "https://cdn.thednvr.com/uploads/2019/07/22115806/USATSI_11533450_168383315_lowres.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 11, pass_yards: 2808, rushing_yards: 153, receiving_yards: 0}];

function viewStudentStats(id, toggle) {
	var el = document.getElementById(id);
	if (toggle == 1) {
		el.style.visibility = "hidden";
		el.style.height = "0px";
	} else {
		el.style.visibility = "visible";
		el.style.height = "auto";
	}
}

function changeColor(color) {
	document.body.style.backgroundColor = color;
}

function loadStatsPage() {
	var table = document.getElementById('stats_table');
	var wins = 0;
	var losses = 0;
	for(var i = 2; i < table.rows.length; i++) {
		var homeScore = table.rows[i].cells[2].innerHTML;
		var awayScore = table.rows[i].cells[3].innerHTML;

		if(homeScore > awayScore) {
			var winner = 'CU';
			wins++;
		} else if (awayScore > homeScore) {
			var winner = table.rows[i].cells[1].innerHTML;
			losses++;
		} else {
			winner = 'tie';
		}

		table.rows[i].cells[4].innerHTML = winner;
	}
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
}

function loadPlayersPage() {
	var playerSelector = document.getElementById("player_selector");

	for (var i = 0; i < players.length; i++) {
		var opt = document.createElement("tr");
		opt.innerHTML = "<a href=\"#\" onclick=switchPlayers(" + i + ")>" + players[i].name + "</a>";

		playerSelector.appendChild(opt);
	}
}

function switchPlayers(playerNum) {
	player = players[playerNum];

	p_year = document.getElementById("p_year");
	p_year.innerHTML = player.year;

	p_major = document.getElementById("p_major");
	p_major.innerHTML = player.major;

	g_played = document.getElementById("g_played");
	g_played.innerHTML = player.games_played;

	player_img = document.getElementById("player_img");
	player_img.alt = player_img.src;
	player_img.src = player.img;

	p_yards = document.getElementById("p_yards");
	p_yards.innerHTML = player.pass_yards;

	r_yards = document.getElementById("r_yards");
	r_yards.innerHTML = player.rushing_yards;

	rec_yards = document.getElementById("rec_yards");
	rec_yards.innerHTML = player.receiving_yards;

	avg_p_yards = document.getElementById("avg_p_yards");
	avg_p_yards.innerHTML = Math.round(player.pass_yards/player.games_played);

	avg_r_yards = document.getElementById("avg_r_yards");
	avg_r_yards.innerHTML = Math.round(player.rushing_yards/player.games_played);

	avg_r_yards = document.getElementById("avg_rec_yards");
	avg_r_yards.innerHTML = Math.round(player.receiving_yards/player.games_played);
}
