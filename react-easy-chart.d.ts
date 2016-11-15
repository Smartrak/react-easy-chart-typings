

declare module "react-easy-chart" {
	import * as React from "react";

	interface Data {
		x: number | Date | string;
		y: number;
		color?: string
	}

	interface DataArray extends Array<Data> {
	}

	interface BarChartProps {
		/** Whether to show axis labels */
		axes?: boolean;

		/** Labels for each of the axis */
		axisLabels?: { x?: string, y?: string, y2?: string };

		/** The width of an individual bar in pixels */
		barWidth?: number;

		clickHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** Whether to automatically color the bars */
		colorBars?: boolean;

		data: DataArray;

		/** A d3 time formatting pattern to be applied to format the x axis values */
		datePattern?: string;

		/** Whether to show a grid on the chart */
		grid?: boolean;

		/** Height of the chart in pixels */
		height?: number;

		/** Something for when you add line data to a BarChart */
		interpolate?: string;

		lineData?: DataArray;

		/** css margins */
		margin?: { top?: number, right?: number, bottom?: number, left?: number };

		mouseMoveHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOutHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOverHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** The d3 time format to be used for the x axis (when xType is 'time') */
		tickTimeDisplayFormat?: string;

		/** Width of the chart in pixels */
		width?: number;

		/** The range that the x axis should show (otherwise automatically calculated) */
		xDomainRange?: Array<number | Date | string>;

		/** The amount of ticks to be shown on the x axis */
		xTickNumber?: number;

		/** What data type the x axis is*/
		xType?: 'time' | 'text' | 'linear';

		/** Whether to show the axis on the right (default false: left) */
		yAxisOrientRight?: boolean;

		/** The range that the y axis should show (otherwise automatically calculated) */
		yDomainRange?: Array<number>;

		/** The amount of ticks to be shown on the y axis */
		yTickNumber?: number;
	}
	class BarChart extends React.Component<BarChartProps, {}> {

	}
}
