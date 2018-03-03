/* global Chart */

'use strict';

(function() {
	Chart.plugins.register({
		id: 'samples_filler_analyser',

		beforeInit: function(chart, options) {
			this.element = document.getElementById(options.target);
		},

		afterUpdate: function(chart) {
			var datasets = chart.data.datasets;
			var element = this.element;
			var stats = [];
			var meta, i, ilen, dataset;

			if (!element) {
				return;
			}

			for (i = 0, ilen = datasets.length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i).$filler;
				if (meta) {
					dataset = datasets[i];
					stats.push({
						fill: dataset.fill,
						target: meta.fill,
						visible: meta.visible,
						index: i
					});
				}
			}
   data.datasets[3].data=[12,15,9,15,20,12,12,14,29,26,45,23,22,23,27,18,17,19,19,30,39,26,21,58,24];
   data.datasets[2].data=[66.3,65.8,68.3,71.0,71.5,70.7,72.0,74.2,61.7,66.3,69.5,75.8,74.5,67.8,72.5,70.0,73.0,84.0,75.7,78.8,68.8,78.7,75.3,73.2,86.5];
   data.datasets[1].data=[22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56,22.56];
			this.element.innerHTML = '<table>' +
				'<tr>' +
					'<th>Dataset</th>' +
					'<th>Fill</th>' +
					'<th>Target (visibility)</th>' +
				'</tr>' +
				stats.map(function(stat) {
					var target = stat.target;
					var row =
						'<td><b>' + stat.index + '</b></td>' +
						'<td>' + JSON.stringify(stat.fill) + '</td>';

					if (target === false) {
						target = 'none';
					} else if (isFinite(target)) {
						target = 'dataset ' + target;
					} else {
						target = 'boundary "' + target + '"';
					}

					if (stat.visible) {
						row += '<td>' + target + '</td>';
					} else {
						row += '<td>(hidden)</td>';
					}

					return '<tr>' + row + '</tr>';
				}).join('') + '</table>';
		}
	});
}());