const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const processEvent = event => {
    const nodeContent = JSON.stringify(event)

    const nodeData = Object.assign({}, event, {
      id: event.id,
      parent: null,
      children: [],
      internal: {
        type: `meetupEvent`,
        content: nodeContent,
        contentDigest: createContentDigest(event),
      },
    })

    return nodeData
  }

  // Convert the options object into a query string

  const { urlname, status } = configOptions

  const apiOptions = queryString.stringify(status)

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://api.meetup.com/Microservices-North/events?status=past&status=upcomming`

  const response = await fetch(apiUrl)
  var data = await response.json()

  console.log(apiUrl)

  for (const event of data) {
    const attendenceApiUrl = `https://api.meetup.com/Microservices-North/events/${
      event.id
    }/attendance`

    const attendenceResponse = await fetch(attendenceApiUrl)
    const attendenceData = await attendenceResponse.json()

    const members = attendenceData.filter(
      ({ member }) => member.role === undefined
    )
    const organizers = attendenceData.filter(
      ({ member }) => member.role !== undefined
    )

    event.members = members
    event.organizers = organizers
  }

  data.forEach(event => {
    const eventData = processEvent(event)
    createNode(eventData)
  })
}
