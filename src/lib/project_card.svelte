<div id="card">
	<h3 id="card-header">
		<slot name="header" />
	</h3>
	<div id="card-body">
		<slot name="body" />
	</div>
	<div id="card-footer">
		<slot name="footer" />
	</div>
</div>

<style scoped>
	#card {
		min-height: 10px;
		background-color: #4f4f4f;
		border-radius: 15px;
		transition: all 0.5s;
		padding: 20px;

		display: grid;
		grid-template-areas:
			'header'
			'body'
			'footer';
		grid-auto-rows: minmax(40px, auto);
	}
	#card:hover {
		transform: scale(1.015, 1.015);
		background-color: #535353;
	}
	#card-header {
		margin-top: 0;
		margin-bottom: 10px;
		grid-area: header;
	}
	#card-body {
		grid-area: body;
	}
	#card-footer {
		grid-area: footer;
	}
</style>
