(function() {var type_impls = {
"spin_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Linker%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#78\">source</a><a href=\"#impl-Linker%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\">Linker</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#81\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.new\" class=\"fn\">new</a>(engine: &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\">Engine</a>) -&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\">Linker</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new linker for the <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\"><code>Engine</code></a> specified with no items defined\nwithin it.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.engine\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#93\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.engine\" class=\"fn\">engine</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\">Engine</a></h4></section></summary><div class=\"docblock\"><p>Returns the <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\"><code>Engine</code></a> this is connected to.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.allow_shadowing\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#101\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.allow_shadowing\" class=\"fn\">allow_shadowing</a>(&amp;mut self, allow: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\">Linker</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Configures whether or not name-shadowing is allowed.</p>\n<p>By default name shadowing is not allowed and it’s an error to redefine\nthe same name within a linker.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.root\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#108\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.root\" class=\"fn\">root</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.LinkerInstance.html\" title=\"struct wasmtime::component::linker::LinkerInstance\">LinkerInstance</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the “root instance” of this linker, used to define names into\nthe root namespace.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.instance\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#125\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.instance\" class=\"fn\">instance</a>(&amp;mut self, name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.LinkerInstance.html\" title=\"struct wasmtime::component::linker::LinkerInstance\">LinkerInstance</a>&lt;'_, T&gt;, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a builder for the named instance specified.</p>\n<h5 id=\"errors\"><a href=\"#errors\">Errors</a></h5>\n<p>Returns an error if <code>name</code> is already defined within the linker.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate_pre\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#147\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.instantiate_pre\" class=\"fn\">instantiate_pre</a>(\n    &amp;self,\n    component: &amp;<a class=\"struct\" href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\">Component</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/instance/struct.InstancePre.html\" title=\"struct wasmtime::component::instance::InstancePre\">InstancePre</a>&lt;T&gt;, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a “pre-instantiation” to resolve the imports of the\n<a href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\"><code>Component</code></a> specified with the items defined within this linker.</p>\n<p>This method will perform as much work as possible short of actually\ninstantiating an instance. Internally this will use the names defined\nwithin this linker to satisfy the imports of the <a href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\"><code>Component</code></a> provided.\nAdditionally this will perform type-checks against the component’s\nimports against all items defined within this linker.</p>\n<p>Note that unlike internally in components where subtyping at the\ninterface-types layer is supported this is not supported here. Items\ndefined in this linker must match the component’s imports precisely.</p>\n<h5 id=\"errors-1\"><a href=\"#errors-1\">Errors</a></h5>\n<p>Returns an error if this linker doesn’t define a name that the\n<code>component</code> imports or if a name defined doesn’t match the type of the\nitem imported by the <code>component</code> provided.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#219-223\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.instantiate\" class=\"fn\">instantiate</a>(\n    &amp;self,\n    store: impl <a class=\"trait\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/store/context/trait.AsContextMut.html\" title=\"trait wasmtime::store::context::AsContextMut\">AsContextMut</a>&lt;Data = T&gt;,\n    component: &amp;<a class=\"struct\" href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\">Component</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"spin_core/struct.Instance.html\" title=\"struct spin_core::Instance\">Instance</a>, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiates the <a href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\"><code>Component</code></a> provided into the <code>store</code> specified.</p>\n<p>This function will use the items defined within this <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\"><code>Linker</code></a> to\nsatisfy the imports of the <a href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\"><code>Component</code></a> provided as necessary. For more\ninformation about this see <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#method.instantiate_pre\" title=\"method wasmtime::component::linker::Linker::instantiate_pre\"><code>Linker::instantiate_pre</code></a> as well.</p>\n<h5 id=\"errors-2\"><a href=\"#errors-2\">Errors</a></h5>\n<p>Returns an error if this <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\"><code>Linker</code></a> doesn’t define an import that\n<code>component</code> requires or if it is of the wrong type. Additionally this\ncan return an error if something goes wrong during instantiation such as\na runtime trap or a runtime limit being exceeded.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate_async\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#243-249\">source</a><h4 class=\"code-header\">pub async fn <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#tymethod.instantiate_async\" class=\"fn\">instantiate_async</a>(\n    &amp;self,\n    store: impl <a class=\"trait\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/store/context/trait.AsContextMut.html\" title=\"trait wasmtime::store::context::AsContextMut\">AsContextMut</a>&lt;Data = T&gt;,\n    component: &amp;<a class=\"struct\" href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\">Component</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"spin_core/struct.Instance.html\" title=\"struct spin_core::Instance\">Instance</a>, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span></h4></section></summary><div class=\"docblock\"><p>Instantiates the <a href=\"spin_core/struct.Component.html\" title=\"struct spin_core::Component\"><code>Component</code></a> provided into the <code>store</code> specified.</p>\n<p>This is exactly like <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html#method.instantiate\" title=\"method wasmtime::component::linker::Linker::instantiate\"><code>Linker::instantiate</code></a> except for async stores.</p>\n<h5 id=\"errors-3\"><a href=\"#errors-3\">Errors</a></h5>\n<p>Returns an error if this <a href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\"><code>Linker</code></a> doesn’t define an import that\n<code>component</code> requires or if it is of the wrong type. Additionally this\ncan return an error if something goes wrong during instantiation such as\na runtime trap or a runtime limit being exceeded.</p>\n</div></details></div></details>",0,"spin_core::Linker"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Linker%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#34\">source</a><a href=\"#impl-Clone-for-Linker%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\">Linker</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/wasmtime/15.0.0/src/wasmtime/component/linker.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/15.0.0/wasmtime/component/linker/struct.Linker.html\" title=\"struct wasmtime::component::linker::Linker\">Linker</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","spin_core::Linker"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()