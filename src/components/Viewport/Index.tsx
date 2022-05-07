import { Box } from '@chakra-ui/react'
import handleViewport from 'react-in-viewport'

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props
  return <Box className="viewport-block" ref={forwardedRef} />
}

const ViewportBlock = handleViewport(
  Block /** options: {}, config: {} **/,
  {
    rootMargin: '200px'
  },
  {
    disconnectOnLeave: false
  }
)

export default ViewportBlock
