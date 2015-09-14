# hoplon.io

Source code for the [Hoplon landing site][1].

Get [Boot][3], then:

```bash
# build for development
$ boot dev

# build for production
$ boot prod

# deploy to gh-pages
$ make deploy
```

*Note*: `make deploy` requires the [ghp-import][2] Python script that you can probably install with `pip install ghp-import`.

## License

```
Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.

The use and distribution terms for this software are covered by the Eclipse
Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php) which can
be found in the file epl-v10.html at the root of this distribution. By using
this software in any fashion, you are agreeing to be bound by the terms of
this license. You must not remove this notice, or any other, from this software.
```

[1]: http://hoplon.io
[2]: https://github.com/davisp/ghp-import
[3]: https://github.com/boot-clj/boot
