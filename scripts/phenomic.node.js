import metadata from "../components/app/metadata"
import routes from "../components/app/routes"
import store from "../components/app/store"

import phenomicStatic from "phenomic/lib/static"

module.exports = (options) =>
  phenomicStatic({
    ...options,
    metadata,
    routes,
    store,
  })
