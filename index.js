const azure = require('azure-storage')

var blobSvc = azure.createBlobService()

blobSvc.createContainerIfNotExists('testcontainer', function (error, result, response) {
  if (error) throw error

  if (result.created) console.log('created container')

  blobSvc.createBlockBlobFromLocalFile('testcontainer', 'myblob', 'test.txt', function (error, result, response) {
    if (error) throw error

    console.dir(result)
  })
})
