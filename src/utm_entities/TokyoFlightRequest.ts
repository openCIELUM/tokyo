import { TokyoPolygon } from '../shapes/2d/TokyoPolygon';
import { FlightRequestEntity } from '@dronfies/microutm-entities/flightRequest';
import { FR_FILL_COLOR, FR_LINE_COLOR, FR_SELECTED_FILL_COLOR } from '../TokyoDefaults';

export class TokyoFlightRequest extends TokyoPolygon {
	constructor(flightRequest: FlightRequestEntity, isSelected = false) {
		super(
			flightRequest.volumes[0].operation_geography,
			`flight-request|${flightRequest.id}|${flightRequest.flight_comments}`,
			isSelected ? FR_SELECTED_FILL_COLOR : FR_FILL_COLOR,
			() => FR_LINE_COLOR
		);
	}
}
