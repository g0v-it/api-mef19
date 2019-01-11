//get account

module.exports = (id) => {
	return ({
	query : `
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX bgo: <http://linkeddata.center/lodmap-bgo/v1#>
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX resource: <http://mef.linkeddata.cloud/resource/>
PREFIX fr: <http://linkeddata.center/botk-fr/v1#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

CONSTRUCT { 
   ?bubbleUri a bgo:Account ;
		bgo:inBubbleGraph ?bubbleGraph;
		bgo:code ?code ;
		dct:title ?title ;
		dct:description ?description ;
		dct:subject ?subject ;
		dct:source ?fact ;
		bgo:amount ?amount ;
		bgo:version "v1-Definitiva";
		bgo:previousValue ?previousValue ;
		bgo:partitionLabel ?partitionLabel ;
  		bgo:isVersionOf ?historyRec ;
  		bgo:hasPart ?part .
     
    ?historyRec a bgo:VersionedAmount ;  
    	bgo:version "v0-Iniziale" ; 
    	bgo:amount ?previousValue .
    	
    ?part a bgo:PartialAmount ;
    	dct:title ?partTitle ; 
    	bgo:amount ?partAmount . 
    	
    ?bubbleGraph a bgo:BubbleGraph; bgo:um ?um .
} WHERE {
   ?bubbleUri a bgo:Account ;
		bgo:inBubbleGraph ?bubbleGraph;
		bgo:code ?code ;
		dct:title ?title ;
		dct:description ?description ;
		dct:subject ?subject ;
		dct:source ?fact ;
		bgo:amount ?amount ;	
		bgo:partitionLabel ?partitionLabel.
  	
  	OPTIONAL { 
        ?fact fr:concept ?concept.
        ?h a fr:Component ; 
          fr:concept/skos:closeMatch ?concept; 
          qb:dataSet resource:spd_dlb_spe_elb_cap_01_2019; 
          fr:amount ?previousValue.
        BIND ( UUID() AS ?historyRec)
    }
  	OPTIONAL { 
      ?bubbleUri bgo:hasPart ?part .
      ?part bgo:amount ?partAmount ; dct:title ?partTitle .
    }
  
    ?bubbleGraph bgo:um ?um.
    # FILTER (?code = "13a951ff5817943558e151b3a391b4ab")
    FILTER (?code = "${id}") 
}
`})
}
