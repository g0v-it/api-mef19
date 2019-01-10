//get accounts
module.exports = {
	query : `
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX bgo: <http://linkeddata.center/lodmap-bgo/v1#>
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX resource: <http://mef.linkeddata.cloud/resource/>    


CONSTRUCT { ?s ?p ?o } WHERE {
  {
  	?s a bgo:BubbleGraph ; ?p ?o
  }
  UNION {
    ?bgo a bgo:BubbleGraph ; bgo:partitionScheme ?s .
    ?s ?p ?o
  }
  UNION {
    ?bgo a bgo:BubbleGraph. ?bgo bgo:partitionScheme/bgo:partition ?s .
    ?s ?p ?o
  } 
  UNION {
    VALUES ?p { 
    	rdf:type 
    	bgo:code
    	dct:title
    	bgo:amount
    	dct:subject
    	bgo:partitionLabel
    }
    ?s a bgo:Account; ?p ?o
  }
  UNION {
    ?s a bgo:Account;
        dct:source/qb:dataSet resource:spd_lbf_spe_elb_cap_01_2019;
        bgo:amount ?o.
    BIND( bgo:previousValue AS ?p)
  }
}
`
}
