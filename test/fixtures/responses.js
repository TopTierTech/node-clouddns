
exports.getDomains = function getDomains(){
		return JSON.stringify({
		  "domains" : [ {
		    "name" : "example.com",
		    "id" : 2725233,
		    "comment" : "Optional domain comment...",
		    "accountId" : 1234,
		    "ttl" : 3600,
		    "emailAddress" : "sample@rackspace.com",
		    "updated" : "2011-06-24T01:23:15.000+0000",
		    "created" : "2011-06-24T01:12:51.000+0000"
		  }, {
		    "name" : "sub1.example.com",
		    "id" : 2725257,
		    "comment" : "1st sample subdomain",
		    "accountId" : 1234,
		    "emailAddress" : "sample@rackspace.com",
		    "updated" : "2011-06-23T03:09:34.000+0000",
		    "created" : "2011-06-23T03:09:33.000+0000"
		  }, {
		    "name" : "sub2.example.com",
		    "id" : 2725258,
		    "comment" : "1st sample subdomain",
		    "accountId" : 1234,
		    "emailAddress" : "sample@rackspace.com",
		    "updated" : "2011-06-23T03:52:55.000+0000",
		    "created" : "2011-06-23T03:52:55.000+0000"
		  }, {
		    "name" : "north.example.com",
		    "id" : 2725260,
		    "accountId" : 1234,
		    "emailAddress" : "sample@rackspace.com",
		    "updated" : "2011-06-23T03:53:10.000+0000",
		    "created" : "2011-06-23T03:53:09.000+0000"
		  }, {
		    "name" : "south.example.com",
		    "id" : 2725261,
		    "comment" : "Final sample subdomain",
		    "accountId" : 1234,
		    "emailAddress" : "sample@rackspace.com",
		    "updated" : "2011-06-23T03:53:14.000+0000",
		    "created" : "2011-06-23T03:53:14.000+0000"
		  }, {
		    "name" : "region2.example.net",
		    "id" : 2725352,
		    "accountId" : 1234,
		    "updated" : "2011-06-23T20:21:06.000+0000",
		    "created" : "2011-06-23T19:24:27.000+0000"
		  }, {
		    "name" : "example.org",
		    "id" : 2718984,
		    "accountId" : 1234,
		    "updated" : "2011-05-03T14:47:32.000+0000",
		    "created" : "2011-05-03T14:47:30.000+0000"
		  }, {
		    "name" : "rackspace.example",
		    "id" : 2722346,
		    "accountId" : 1234,
		    "updated" : "2011-06-21T15:54:31.000+0000",
		    "created" : "2011-06-15T19:02:07.000+0000"
		  }, {
		    "name" : "dnsaas.example",
		    "id" : 2722347,
		    "comment" : "Sample comment",
		    "accountId" : 1234,
		    "updated" : "2011-06-21T15:54:31.000+0000",
		    "created" : "2011-06-15T19:02:07.000+0000"
		  } ],
		  "links" : [ {
		    "content" : "",
		    "href" : "https://dns.api.rackspacecloud.com/v1.0/1234/domains?limit=10&offset=10",
		    "rel" : "previous"
		  }, {
		    "content" : "",
		    "href" : "https://dns.api.rackspacecloud.com/v1.0/1234/domains?limit=10&offset=30",
		    "rel" : "next"
		  } ],
		  "totalEntries" : 114
		});
	}