# Mongo Share for Meteor

Mongo Share will prefix all of your MongoDB collection names so that you can share one database among multiple applications. This will reduce your hosting costs when you have a lot of small applications that may not warrant a unique database on their own. It's good for your wallet and the environment! 

| Original Collection Name | Prefixed Collection Name |
|-----------------|--------------------------|
| lists           | app1_lists               |
| todos           | app1_todos               |
| users           | app1_todos               |

# How to Use

First, install the package to your Meteor application:

```
meteor add msavin:mongoshare
```

Second, define the prefix on your `settings.json` file:

```json
{
	"public": {
		"mongo_prefix": "app1"
	}
}
```

Alternatively, you may define it as a global isomorphic variable:

```js
MONGO_PREFIX = "app1"
````

Finally, go into `./meteor/packages` and move the package as high on the list as you can while ensuring it loads after the `mongo` package. This package must initalize before other packages to ensure that the prefix patch is applied. 

# Downsides of Package

The biggest downside of the package is that your Mongo oplog data will be shared among all applications. However, considering that the point of this package is to share a database among many small apps, this trade-off is reasonable and Meteor should do a good job of filtering out the irrelevant updates. As soon as one of your applications starts to grow, you can move it to a dedicated database.
