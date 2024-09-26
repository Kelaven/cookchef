// * créer contexte pour stocker le chemin utilisé dans fetch qui sera toujours le même (Provider dans main.jsx)

import { createContext } from "react";

export const ApiContext = createContext(null);
