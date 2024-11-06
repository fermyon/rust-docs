(function() {
    var type_impls = Object.fromEntries([["spin_trigger",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsContext-for-Store%3CT%3E\" class=\"impl\"><a href=\"#impl-AsContext-for-Store%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html\" title=\"trait wasmtime::runtime::store::context::AsContext\">AsContext</a> for Store&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Data\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Data\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html#associatedtype.Data\" class=\"associatedtype\">Data</a> = T</h4></section></summary><div class='docblock'>The host information associated with the <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\"><code>Store</code></a>, aka the <code>T</code> in\n<a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\"><code>Store&lt;T&gt;</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_context\" class=\"method trait-impl\"><a href=\"#method.as_context\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html#tymethod.as_context\" class=\"fn\">as_context</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/struct.StoreContext.html\" title=\"struct wasmtime::runtime::store::context::StoreContext\">StoreContext</a>&lt;'_, &lt;Store&lt;T&gt; as <a class=\"trait\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html\" title=\"trait wasmtime::runtime::store::context::AsContext\">AsContext</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html#associatedtype.Data\" title=\"type wasmtime::runtime::store::context::AsContext::Data\">Data</a>&gt;</h4></section></summary><div class='docblock'>Returns the store context that this type provides access to.</div></details></div></details>","AsContext","spin_trigger::Store"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsContextMut-for-Store%3CT%3E\" class=\"impl\"><a href=\"#impl-AsContextMut-for-Store%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContextMut.html\" title=\"trait wasmtime::runtime::store::context::AsContextMut\">AsContextMut</a> for Store&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_context_mut\" class=\"method trait-impl\"><a href=\"#method.as_context_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContextMut.html#tymethod.as_context_mut\" class=\"fn\">as_context_mut</a>(\n    &amp;mut self,\n) -&gt; <a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/struct.StoreContextMut.html\" title=\"struct wasmtime::runtime::store::context::StoreContextMut\">StoreContextMut</a>&lt;'_, &lt;Store&lt;T&gt; as <a class=\"trait\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html\" title=\"trait wasmtime::runtime::store::context::AsContext\">AsContext</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/context/trait.AsContext.html#associatedtype.Data\" title=\"type wasmtime::runtime::store::context::AsContext::Data\">Data</a>&gt;</h4></section></summary><div class='docblock'>Returns the store context that this type provides access to.</div></details></div></details>","AsContextMut","spin_trigger::Store"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsMut%3CStore%3CT%3E%3E-for-Store%3CT%3E\" class=\"impl\"><a href=\"#impl-AsMut%3CStore%3CT%3E%3E-for-Store%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\">Store</a>&lt;T&gt;&gt; for Store&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut\" class=\"method trait-impl\"><a href=\"#method.as_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html#tymethod.as_mut\" class=\"fn\">as_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\">Store</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Converts this type into a mutable reference of the (usually inferred) input type.</div></details></div></details>","AsMut<Store<T>>","spin_trigger::Store"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CStore%3CT%3E%3E-for-Store%3CT%3E\" class=\"impl\"><a href=\"#impl-AsRef%3CStore%3CT%3E%3E-for-Store%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\">Store</a>&lt;T&gt;&gt; for Store&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\">Store</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<Store<T>>","spin_trigger::Store"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Store%3CT%3E\" class=\"impl\"><a href=\"#impl-Store%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Store&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_deadline\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_deadline</a>(&amp;mut self, deadline: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>)</h4></section></summary><div class=\"docblock\"><p>Sets the execution deadline.</p>\n<p>This is a rough deadline; an instance will trap some time after this\ndeadline, determined by [<code>EngineBuilder::epoch_tick_interval</code>] and\ndetails of the system’s thread scheduler.</p>\n<p>See <a href=\"https://docs.rs/wasmtime/latest/wasmtime/struct.Store.html#method.set_epoch_deadline\"><code>wasmtime::Store::set_epoch_deadline</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">data</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Provides access to the inner <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\"><code>wasmtime::Store</code></a>’s data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">data_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Provides access to the inner <a href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/store/struct.Store.html\" title=\"struct wasmtime::runtime::store::Store\"><code>wasmtime::Store</code></a>’s data.</p>\n</div></details></div></details>",0,"spin_trigger::Store"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[9162]}