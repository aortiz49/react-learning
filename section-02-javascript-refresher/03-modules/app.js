// this will not compile. It is only for demonstrative purposes.

import person from "./person.js";
/* in the following import statement, we can name this whatever we want since it is the
 * only import from 'person.js'. This is a default export.
 */
import prs from ".person.js";

/*
 * in the next two imports, we use curly braces syntax to explicitly target specific
 * things from the desired file. (These are named exports since we import them
 * by their names.)
 */
import { baseData } from "./utility.js";
import { clean } from "./utility.js";

/* this is another way to import more than one things from the same file. We can also *
 * create an alias for these imports.
 */
import { clean as cleanVar, baseData as base } from "./utility.js";

/**
 * utilityBundle is a javascript objectwhich exposes all constents and anything
 * exported as properties. (utilityBundle.baseDate, utilityBundle.clean)
 */
import * as utilityBundle from "./utility.js";
