

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
		xDomainRange?: Array<number> | Array<Date> | Array<string>;

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

	interface PieChartProps {
		clickHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		data: DataArray;

		/** Size in pixels of the inner hole (diameter) */
		innerHoleSize?: number;

		/** Whether to add labels the to pie segments */
		labels?: boolean;

		mouseMoveHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOutHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOverHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** Padding around the chart in pixels */
		padding?: number;

		/** Size in pixels in each dimension */
		size?: number;

		styles?: { [cssSelector: string]: CSSStyleDeclaration };
	}
	class PieChart extends React.Component<PieChartProps, {}> {
	}

	interface LineChartProps {
		/** Whether to show axis labels */
		axes?: boolean;

		/** Labels for each of the axis */
		axisLabels?: { x?: string, y?: string };

		clickHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		data: Array<Array<{
			x: number | Date | string;
			y: number | Date | string
		}>>;

		/** Whether to show circles on the data points */
		dataPoints?: boolean;

		/** Whether to show horizontal grid lines on the chart */
		grid?: boolean;

		/** Height of the chart in pixels */
		height?: number;

		/** Smoothing option for the lines */
		interpolate?: 'linear' | 'linear-closed' | 'step' | 'step-before' | 'step-after' | 'basis' | 'basis-open' | 'basis-closed' | 'bundle' | 'cardinal' | 'cardinal-open' | 'cardinal-closed' | 'monotone';

		lineColors?: Array<string>;

		/** css margins */
		margin?: { top?: number, right?: number, bottom?: number, left?: number };

		mouseMoveHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOutHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOverHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** The d3 time format to be used for the x axis (when xType is 'time') */
		tickTimeDisplayFormat?: string;

		/** Whether to show vertical grid lines on the chart */
		verticalGrid?: boolean;

		/** Width of the chart in pixels */
		width?: number;

		/** The range that the x axis should show (otherwise automatically calculated) */
		xDomainRange?: Array<number> | Array<Date> | Array<string>;

		/** The amount of ticks to be shown on the x axis */
		xTicks?: number;

		/** What data type the x axis is*/
		xType?: 'time' | 'text' | 'linear';

		/** Whether to show the axis on the right (default false: left) */
		yAxisOrientRight?: boolean;

		/** The range that the y axis should show (otherwise automatically calculated) */
		yDomainRange?: Array<number> | Array<string>;

		/** The amount of ticks to be shown on the y axis */
		yTicks?: number;

		/** What data type the x axis is*/
		yType?: 'time' | 'text' | 'linear';
	}
	class LineChart extends React.Component<LineChartProps, {}> {
	}

	interface AreaChartProps extends LineChartProps {
		/** Make the gradient area a solid fill rather than a gradient */
		noAreaGradient?: boolean;
	}
	class AreaChart extends React.Component<AreaChartProps, {}> {
	}

	interface ScatterPlotProps {
		/** Whether to show axis labels */
		axes?: boolean;

		/** Labels for each of the axis */
		axisLabels?: { x?: string, y?: string };

		clickHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** Allows styling of individual types of points */
		config?: Array<{ type: string, color: string, stroke: string }>;

		data: Array<{ type: string, x: number | Date | string, y: number | Date | string, z?: number }>;

		/** Radius of the dots on the chart */
		dotRadius?: number;

		/** Whether to show horizontal grid lines on the chart */
		grid?: boolean;

		/** Height of the chart in pixels */
		height?: number;

		/** css margins */
		margin?: { top?: number, right?: number, bottom?: number, left?: number };

		mouseMoveHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOutHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		mouseOverHandler?: (data: Data, mouseEvent: MouseEvent) => any;

		/** Whether to show vertical grid lines on the chart */
		verticalGrid?: boolean;

		/** Width of the chart in pixels */
		width?: number;

		/** The range that the x axis should show (otherwise automatically calculated) */
		xDomainRange?: Array<number> | Array<Date> | Array<string>;

		/** What data type the x axis is*/
		xType?: 'time' | 'text' | 'linear';

		/** Whether to show the axis on the right (default false: left) */
		yAxisOrientRight?: boolean;

		/** The range that the y axis should show (otherwise automatically calculated) */
		yDomainRange?: Array<number> | Array<Date> | Array<string>;

		/** What data type the x axis is*/
		yType?: 'time' | 'text' | 'linear';
	}
	class ScatterPlot extends React.Component<ScatterPlotProps, {}> {
	}

	interface LegendProps {
		/** Override the color of the items */
		config?: Array<{ color: string }>;

		data: Array<any>;

		dataId: string;

		/** change list items to inline-block (default block) */
		horizontal?: boolean;

		/** Override the css styles of individual components, see http://rma-consulting.github.io/react-easy-chart/legend/index.html */
		styles?: { [cssSelector: string]: CSSStyleDeclaration };
	}
	class Legend extends React.Component<LegendProps, {}> {

	}

}

