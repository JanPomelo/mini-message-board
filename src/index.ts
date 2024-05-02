import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';
import { on } from 'events';


// **** Run **** //

// const SERVER_START_MSG = ('Express server started on port: ' + 
//   EnvVars.Port.toString());

server.listen(3000, '0.0.0.0');
