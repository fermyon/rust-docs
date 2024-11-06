searchState.loadedDescShard("spin_manifest", 0, "Configuration of an application for the Spin runtime.\nA Spin manifest schema version.\nSpin manifest schema version 1.\nSpin manifest schema version 2.\nCompatibility for old manifest versions.\nDetects the Spin manifest schema version of the given TOML …\nSpin manifest errors\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nParses a V1 or V2 app manifest file into a <code>AppManifest</code>.\nParses a V1 or V2 app manifest into a <code>AppManifest</code>.\nManifest normalization functions.\nSerialization types for the Spin manifest file format …\nConverts the old <code>allowed_http_hosts</code> field to the new …\nConverts a V1 app manifest to V2.\nSpin manifest errors\nInvalid digest format.\nInvalid ID format.\nInvalid trigger config\nInvalid variable definition\nInvalid manifest version\nIO error\nError serializing metadata\nError parsing TOML\nValidation error\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe invalid ID\nThe invalid variable name\nThe reason why the ID is invalid\nThe reason why the config is invalid\nThe reason why the variable is invalid\nThe trigger type\nNormalizes some optional <code>AppManifest</code> features into a …\nSerialization types for the Spin manifest V1.\nSerialization types for the Spin manifest V2.\nApp manifest\nApp trigger config\nComponent build configuration\nComponent source\nComponent definition\n<code>&quot;local.wasm&quot;</code>\n<code>&quot;images/*.png&quot;</code>\n<code>{ ... }</code>\n<code>{ ... }</code>\n<code>{ ... }</code>\nVariable definition\nWASI files mount\n<code>ai_models = [&quot;llama2-chat&quot;]</code>\n<code>allowed_http_hosts = [&quot;example.com&quot;]</code>\n<code>allowed_outbound_hosts</code> = [“redis://redis.com:6379”]`\n<code>authors = [&quot;author@example.com&quot;]</code>\nBuild configuration\n<code>command = &quot;cargo build&quot;</code>\nThe commands to execute for the build\n<code>[[component]]</code>\nTrigger config\n<code>config = { name = &quot;{{ app_var }}&quot;}</code>\n<code>default = &quot;default value&quot;</code>\n<code>description = &quot;App description&quot;</code>\n<code>description = &quot;Component description&quot;</code>\n<code>environment = { VAR = &quot;value&quot; }</code>\n<code>exclude_files = [&quot;secrets/*&quot;]</code>\n<code>files = [...]</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n`id = “component-id”\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>key_value_stores = [&quot;default&quot;]</code>\n<code>name = &quot;my-app&quot;</code>\n<code>required = true</code>\n<code>secret = true</code>\n<code>source = ...</code>\n<code>sqlite_databases = [&quot;default&quot;]</code>\n<code>trigger = { ... }</code>\n<code>[component.trigger]</code>\n<code>type = &quot;trigger-type&quot;</code>\n<code>[variables]</code>\n<code>version = &quot;1.0.0&quot;</code>\nwatch = [“src/**/*.rs”]\n`workdir = “components/main”\n<code>digest = </code>“sha256:abc123…”`\n<code>package = &quot;example:component&quot;</code>\n<code>registry = &quot;example.com&quot;</code>\n<code>url = &quot;https://example.test/remote.wasm&quot;</code>\n<code>version = &quot;1.2.3&quot;</code>\n<code>destination = &quot;/&quot;</code>\n<code>source = &quot;content/dir&quot;</code>\nApp details\nApp manifest\nComponent definition\nComponent build configuration\nComponent dependencies\nComponent dependency\nComponent source\nComponent reference or inline definition\n…\n<code>{ ... }</code>\nA “kebab-case” identifier.\n…\n<code>&quot;local.wasm&quot;</code>\nOne or many <code>ComponentSpec</code>(s)\n<code>... = { version = &quot;0.1.0&quot;, registry = &quot;registry.io&quot;, ...}</code>\n<code>&quot;images/*.png&quot;</code>\n<code>{ ... }</code>\n<code>&quot;component-id&quot;</code>\n<code>{ ... }</code>\n<code>{ ... }</code>\nA “snake_case” identifier.\nTrigger configuration\nVariable definition\n<code>... = &quot;&gt;= 0.1.0&quot;</code>\nWASI files mount\n<code>ai_models = [&quot;llama2-chat&quot;]</code>\n<code>allowed_http_hosts = [&quot;example.com&quot;]</code>\n<code>allowed_outbound_hosts = [&quot;redis://myredishost.com:6379&quot;]</code>\n<code>[application]</code>\n<code>authors = [&quot;author@example.com&quot;]</code>\nBuild configuration\n<code>command = &quot;cargo build&quot;</code>\n<code>component = ...</code>\n<code>[component.&lt;id&gt;]</code>\n<code>components = { ... }</code>\nOpaque trigger-type-specific config\n<code>default = &quot;default value&quot;</code>\nComponent dependencies\nIf true, allow dependencies to inherit configuration.\n<code>description = &quot;App description&quot;</code>\n<code>description = &quot;Component description&quot;</code>\n<code>environment = { VAR = &quot;value&quot; }</code>\n<code>exclude_files = [&quot;secrets/*&quot;]</code>\n<code>files = [...]</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n<code>id = &quot;trigger-id&quot;</code>\n<code>dependencies = { &quot;foo:bar&quot; = &quot;&gt;= 0.1.0&quot; }</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>key_value_stores = [&quot;default&quot;, &quot;my-store&quot;]</code>\n<code>name = &quot;my-app&quot;</code>\nCombine <code>allowed_outbound_hosts</code> with the deprecated …\n<code>required = true</code>\n<code>secret = true</code>\n<code>source = ...</code>\n<code>spin_manifest_version = 2</code>\n<code>sqlite_databases = [&quot;default&quot;, &quot;my-database&quot;]</code>\nSettings for custom tools or plugins. Spin ignores this …\nSettings for custom tools or plugins. Spin ignores this …\n<code>[application.triggers.&lt;type&gt;]</code>\n<code>[[trigger.&lt;type&gt;]]</code>\nThis method ensures that the dependencies of each …\n<code>[variables]</code>\n<code>variables = { name = &quot;{{ app_var }}&quot;}</code>\n<code>version = &quot;1.0.0&quot;</code>\nwatch = [“src/**/*.rs”]\n`workdir = “components/main”\nSHA256 Checksum of the component. The string should start …\nOptional export name\nOptional export name\nOptional export name\nOptional package name <code>foo:bar</code>. If not specified, the …\nPath to Wasm\nOptional registry spec\nURL to Wasm\nPackage version requirement\n<code>digest = </code>“sha256:abc123…”`\n<code>package = &quot;example:component&quot;</code>\n<code>registry = &quot;example.com&quot;</code>\n<code>url = &quot;https://example.test/remote.wasm&quot;</code>\n<code>version = &quot;1.2.3&quot;</code>\n<code>destination = &quot;/&quot;</code>\n<code>source = &quot;content/dir&quot;</code>")