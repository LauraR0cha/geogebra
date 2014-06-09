package geogebra.common.kernel.commands;

import geogebra.common.kernel.Kernel;
import geogebra.common.kernel.arithmetic.Command;
import geogebra.common.kernel.geos.GeoElement;
import geogebra.common.kernel.geos.GeoPoint;
import geogebra.common.kernel.kernelND.GeoPointND;
import geogebra.common.main.MyError;

/**
 * CircleArc[ <GeoPoint center>, <GeoPoint>, <GeoPoint> ]
 */
public class CmdCircleArc extends CommandProcessor {

	/**
	 * Create new command processor
	 * 
	 * @param kernel
	 *            kernel
	 */
	public CmdCircleArc(Kernel kernel) {
		super(kernel);
	}

	@Override
	final public GeoElement[] process(Command c) throws MyError {
		int n = c.getArgumentNumber();
		boolean[] ok = new boolean[n];
		GeoElement[] arg;

		switch (n) {
		case 3:
			arg = resArgs(c);
			if ((ok[0] = (arg[0].isGeoPoint()))
					&& (ok[1] = (arg[1].isGeoPoint()))
					&& (ok[2] = (arg[2].isGeoPoint()))) {
				GeoElement[] ret = { circleArc(c.getLabel(), (GeoPointND) arg[0],
								(GeoPointND) arg[1], (GeoPointND) arg[2]) };
				return ret;
			}
			throw argErr(app, c.getName(), getBadArg(ok,arg));
			
		case 4:
			arg = resArgs(c);
			
			GeoElement[] ret = process4(c, arg, ok);
			
			if (ret != null){
				return ret;
			}

			// syntax error
			throw argErr(app, c.getName(), getBadArg(ok, arg));
			
		default:
			throw argNumErr(app, c.getName(), n);
		}
	}
	
	/**
	 * 
	 * @param label label
	 * @param center center
	 * @param startPoint start point
	 * @param endPoint end point
	 * @return arc circle
	 */
	protected GeoElement circleArc(String label, GeoPointND center, GeoPointND startPoint, GeoPointND endPoint){
		return getAlgoDispatcher()
				.CircleArc(label, (GeoPoint) center,
						(GeoPoint) startPoint, (GeoPoint) endPoint); 
	}
	
	
	/**
	 * process circle arc when 4 arguments
	 * @param c command
	 * @param arg arguments
	 * @param ok ok array
	 * @return result (if one)
	 * @throws MyError in 2D, not possible with 4 args
	 */
	protected GeoElement[] process4(Command c, GeoElement[] arg, boolean[] ok) throws MyError{
		throw argNumErr(app, c.getName(), 4);
	}
	
}
