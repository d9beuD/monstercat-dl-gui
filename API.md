# Monstercat Connect V2 API

params | value
--- | ---
`baseUrl` | https://connect.monstercat.com/v2
`version` | 2

### `/releases`
###### GET

Return releases list.

params | type | value | description
--- | --- | --- | ---
`limit` | Number | `1` to `50` (default) | Set results length
`type` | String | `Single` \| `Podcast` \| `Album` \| `EP` | Set results types. Can be chained (?type=...&type=...)
