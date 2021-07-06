const prefix = Meteor.settings.public.mongo_prefix || global["MONGO_PREFIX"];

function MongoShare(original) {
  // Save the original prototype
  if (!original._CollectionPrototype) original._CollectionPrototype = new original.Collection(null);
  var constructor = original.Collection;
  var proto = original._CollectionPrototype;

  // Patch the Collection object
  original.Collection = function () {
  	const originalName = arguments[0];

  	// Apply prefix if collectionName exists (to support `null` entries for local collections, etc)
  	if (originalName) {
  		const collectionName = prefix + "_" + arguments[0]
  		arguments[0] = collectionName;	
  	}
  	
    return constructor.apply(this, arguments);
  };

  original.Collection.prototype = proto;
  original.Collection.prototype.constructor = original.Collection;

  for (var prop in constructor) {
    if (constructor.hasOwnProperty(prop)) {
      original.Collection[prop] = constructor[prop];
    }
  }
};

if (prefix) MongoShare(Mongo);