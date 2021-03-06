// Generated by CoffeeScript 1.7.1
(function() {
  var my_light_red;

  my_light_red = "#b90000";

  this.append_outer_svg = function(options) {
    var main;
    if (options == null) {
      options = {};
    }
    if (options.element == null) {
      options.element = "svg:svg";
    }
    if (options.selector == null) {
      options.selector = "body";
    }
    if (options.background == null) {
      options.background = "#fff";
    }
    if (options.width == null) {
      options.width = 200;
    }
    if (options.height == null) {
      options.height = 200;
    }
    if (options.padding == null) {
      options.padding = 10;
    }
    main = d3.select(options.selector).append(options.element).attr({
      "width": options.width,
      "height": options.height
    }).style({
      'background': options.background,
      'padding': options.padding
    });
    if (options.id) {
      main.attr("id", options.id);
    }
    if (options["class"]) {
      main.attr("class", options["class"]);
    }
    main.width = options.width;
    main.height = options.height;
    main.svg = options.selector;
    return main;
  };

  this.new_plot = function(options) {
    var key, plot, value, _base, _base1, _base10, _base11, _base12, _base13, _base14, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9;
    if (options == null) {
      options = {};
    }
    if (options.data == null) {
      options.data = [
        {
          x: 0,
          y: 0
        }
      ];
    }
    if (options.data_ranges == null) {
      options.data_ranges = {};
    }
    if ((_base = options.data_ranges).x == null) {
      _base.x = [d3.min(options.data.x), d3.max(options.data.x)];
    }
    if ((_base1 = options.data_ranges).y == null) {
      _base1.y = [d3.min(options.data.y), d3.max(options.data.y)];
    }
    if (options.padding == null) {
      options.padding = {};
    }
    if ((_base2 = options.padding).top == null) {
      _base2.top = 20;
    }
    if ((_base3 = options.padding).right == null) {
      _base3.right = 150;
    }
    if ((_base4 = options.padding).bottom == null) {
      _base4.bottom = 50;
    }
    if ((_base5 = options.padding).left == null) {
      _base5.left = 50;
    }
    if (options.width == null) {
      options.width = 400;
    }
    if (options.height == null) {
      options.height = 400;
    }
    options.total_height = options.height + options.padding.top + options.padding.bottom;
    options.total_width = options.width + options.padding.left + options.padding.right;
    if (options.background == null) {
      options.background = "#fff";
    }
    if (options.zoom == null) {
      options.zoom = true;
    }
    if (options.categorical_scale_padding == null) {
      options.categorical_scale_padding = 1;
    }
    if (options.linear_scale_padding == null) {
      options.linear_scale_padding = 40;
    }
    if (options.labels == null) {
      options.labels = {};
    }
    if ((_base6 = options.labels).title == null) {
      _base6.title = "";
    }
    if ((_base7 = options.labels).x_title == null) {
      _base7.x_title = "x";
    }
    if ((_base8 = options.labels).y_title == null) {
      _base8.y_title = "y";
    }
    if (options.rotate == null) {
      options.rotate = {};
    }
    if ((_base9 = options.rotate).x_title == null) {
      _base9.x_title = false;
    }
    if ((_base10 = options.rotate).y_title == null) {
      _base10.y_title = true;
    }
    if ((_base11 = options.rotate).x_labels == null) {
      _base11.x_labels = false;
    }
    if ((_base12 = options.rotate).y_labels == null) {
      _base12.y_labels = false;
    }
    if (options.scale_limits == null) {
      options.scale_limits = {};
    }
    if ((_base13 = options.scale_limits).x == null) {
      _base13.x = null;
    }
    if ((_base14 = options.scale_limits).y == null) {
      _base14.y = null;
    }
    plot = append_outer_svg({
      id: options.id,
      width: options.total_width,
      height: options.total_height,
      background: options.background,
      padding: 0
    }).append("svg:g");
    for (key in options) {
      value = options[key];
      plot[key] = value;
    }
    plot.top_region = plot.append("g").attr("transform", "translate(" + plot.padding.left + ", 0)").attr("class", "top");
    plot.right_region = plot.append("g").attr("transform", "translate(" + (plot.padding.left + plot.width) + ", " + plot.padding.top + ")").attr("class", "right");
    plot.bottom_region = plot.append("g").attr("transform", "translate(" + plot.padding.left + ", " + (plot.padding.top + plot.height) + ")").attr("class", "bottom");
    plot.left_region = plot.append("g").attr("transform", "translate(" + plot.padding.left + ", " + plot.padding.top + ")").attr("class", "left");
    plot.center = plot.append("g").attr("transform", "translate(" + plot.padding.left + ", " + plot.padding.top + ")").attr("class", "center");
    plot.get_scale_types = function() {
      plot.scale_types = {};
      plot.scale_types.x = get_scale_type(plot, "x");
      plot.scale_types.y = get_scale_type(plot, "y");
      return plot;
    };
    plot.get_scale_domains = function() {
      plot.scale_domains = {};
      plot.scale_domains.x = get_scale_domain(plot, "x");
      plot.scale_domains.y = get_scale_domain(plot, "y");
      return plot;
    };
    plot.get_scale_ranges = function() {
      plot.scale_ranges = {};
      plot.scale_ranges.x = [0, plot.width];
      plot.scale_ranges.y = [plot.height, 0];
      return plot;
    };
    plot.get_scales = function() {
      plot.get_scale_types().get_scale_domains().get_scale_ranges();
      plot.scales = {};
      plot.scales.x = get_scale(plot, "x");
      plot.scales.y = get_scale(plot, "y");
      return plot;
    };
    plot.get_jitters = function() {
      plot.jitters = {};
      plot.jitters.x = get_jitter(plot, "x");
      plot.jitters.y = get_jitter(plot, "y");
      return plot;
    };
    plot.add_title = function() {
      plot.top_region.append("text").text(plot.labels.title).attr({
        "class": "title",
        "text-anchor": "middle",
        "x": plot.width / 2,
        "y": plot.padding.top / 2
      });
      return plot;
    };
    plot.add_subtitle = function() {
      plot.top_region.append("text").text(plot.labels.subtitle).attr({
        "class": "subtitle",
        "text-anchor": "middle",
        "x": plot.width / 2,
        "y": plot.padding.top / 2 + 30
      });
      return plot;
    };
    plot.add_axes = function() {
      plot.axes = {};
      plot.add_x_axis();
      plot.add_y_axis();
      return plot;
    };
    plot.add_x_axis = function() {
      if (plot.orientation_x == null) {
        plot.orientation_x = "bottom";
      }
      plot.axes.x = d3.svg.axis().scale(plot.scales.x).orient(plot.orientation_x);
      if (plot.x_format != null) {
        plot.axes.x.tickFormat(d3.format(plot.x_format));
      }
      plot.bottom_region.append("g").attr("class", "x axis").call(plot.axes.x);
      plot.bottom_region.selectAll(".x.axis line, .x.axis path").style({
        "fill": "none",
        "stroke": "black",
        "shape-rendering": "crispEdges",
        "stroke-width": 2
      });
      plot.add_x_axis_title(plot.labels.x_title);
      if (plot.rotate.x_labels === true) {
        plot.bottom_region.selectAll(".tick text").attr("dy", "-.15em").attr("dx", "-.8em").attr("transform", "rotate(-90)").style("text-anchor", "end");
      }
      return plot;
    };
    plot.add_y_axis = function() {
      if (plot.orientation_y == null) {
        plot.orientation_y = "left";
      }
      plot.axes.y = d3.svg.axis().scale(plot.scales.y).orient(plot.orientation_y);
      if (plot.y_format != null) {
        plot.axes.y.tickFormat(d3.format(plot.y_format));
      }
      plot.left_region.append("g").attr("class", "y axis").call(plot.axes.y);
      plot.left_region.selectAll(".y.axis line, .y.axis path").style({
        "fill": "none",
        "stroke": "black",
        "shape-rendering": "crispEdges",
        "stroke-width": 2
      });
      plot.add_y_axis_title(plot.labels.y_title);
      return plot;
    };
    plot.add_x_axis_title = function(text) {
      var x_title;
      x_title = plot.bottom_region.append("text").text(text).attr({
        "class": "x title",
        "text-anchor": "middle"
      });
      if (plot.rotate.x_title === true) {
        x_title.attr({
          "text-anchor": "end",
          "transform": "rotate(90) translate(" + plot.padding.bottom + ",-" + (plot.width / 2) + ")",
          "dx": "-.5em"
        });
      } else {
        x_title.attr({
          "transform": "translate(" + (plot.width / 2) + "," + (plot.padding.bottom - 10) + ")"
        });
      }
      return plot;
    };
    plot.add_y_axis_title = function(text) {
      var y_title;
      y_title = plot.left_region.append("text").text(text).attr({
        "class": "y title",
        "text-anchor": "middle",
        "x": -plot.height / 2
      });
      if (plot.rotate.y_title === true) {
        y_title.attr({
          "y": -plot.padding.left + 5,
          "dy": "1em",
          "transform": "rotate(-90)"
        });
      } else {
        y_title.attr({
          "dx": "1em",
          "y": plot.padding.left - 5
        });
      }
      return plot;
    };
    plot.add_title().add_subtitle().get_scales();
    if (plot.scale_types.x === "ordinal" || plot.scale_types.y === "ordinal") {
      plot.zoom = false;
    }
    plot.get_jitters().add_axes();
    return plot;
  };

  this.get_scale_type = function(plot, scale_name) {
    var scale_type;
    if (get_type(plot.data_ranges[scale_name][0]) === "number") {
      scale_type = "linear";
    } else {
      scale_type = "ordinal";
    }
    return scale_type;
  };

  this.get_scale_domain = function(plot, scale_name) {
    var domain;
    if (plot.scale_types[scale_name] === "linear") {
      if (plot.scale_limits[scale_name] != null) {
        domain = plot.scale_limits[scale_name];
      } else {
        domain = plot.data_ranges[scale_name];
      }
    } else {
      domain = plot.categorical_domains[scale_name];
    }
    return domain;
  };

  this.get_scale = function(plot, scale_name) {
    var scale;
    if (plot.scale_types[scale_name] === "linear") {
      scale = d3.scale.linear().domain(plot.scale_domains[scale_name]).range(plot.scale_ranges[scale_name]);
      scale = add_scale_padding(scale, plot.linear_scale_padding);
    } else {
      scale = d3.scale.ordinal().domain(plot.scale_domains[scale_name]).rangePoints(plot.scale_ranges[scale_name], plot.categorical_scale_padding);
    }
    return scale;
  };

  this.get_jitter = function(plot, scale_name) {
    var band_width, jitter;
    band_width = d3.extent(plot.scale_ranges[scale_name])[1] / plot.scales[scale_name].domain().length;
    jitter = function() {
      return band_width * plot.jitter[scale_name] * random();
    };
    return jitter;
  };

  this.add_scale_padding = function(scale, padding) {
    var domain_with_padding, range;
    range = scale.range();
    if (range[0] > range[1]) {
      padding *= -1;
    }
    domain_with_padding = [range[0] - padding, range[1] + padding].map(scale.invert);
    scale.domain(domain_with_padding);
    return scale;
  };

  this.random = function() {
    return (Math.random() * 2) - 1;
  };

  this.parent_of = function(child) {
    return d3.select(child).node().parentNode;
  };

  this.format_property = function(x) {
    var decimal_format;
    decimal_format = d3.format(".2f");
    if (type(x) === "number" && x % 1 !== 0) {
      return decimal_format(x);
    } else {
      return x;
    }
  };

  this.get_type = function(obj) {
    var classToType, myClass, name, _i, _len, _ref;
    if (obj === void 0 || obj === null) {
      return String(obj);
    }
    classToType = new Object;
    _ref = "Boolean Number String Function Array Date RegExp".split(" ");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    myClass = Object.prototype.toString.call(obj);
    if (myClass in classToType) {
      return classToType[myClass];
    }
    return "object";
  };

  this.append_container = function(options) {
    var container;
    if (options == null) {
      options = {};
    }
    if (options.selector == null) {
      options.selector = "body";
    }
    if (options["class"] == null) {
      options["class"] = "container";
    }
    container = d3.select(options.selector).append('div').attr("class", options["class"]).style("overflow", "hidden");
    return container;
  };

  this.append_div = function(container, options) {
    var div;
    if (options == null) {
      options = {};
    }
    if (options.background == null) {
      options.background = my_light_red;
    }
    if (options.margin == null) {
      options.margin = 10;
    }
    div = d3.select(container.node()).append('div').style('background', options.background).style('margin', options.margin).style("float", "left");
    if (options.id) {
      div.attr("id", options.id);
    }
    if (options["class"]) {
      div.attr("class", options["class"]);
    }
    return div;
  };

  Array.prototype.unique = function() {
    var i, l, o, r;
    o = {};
    l = this.length;
    r = [];
    i = 0;
    while (i < l) {
      o[this[i]] = this[i];
      i += 1;
    }
    for (i in o) {
      r.push(o[i]);
    }
    return r;
  };

}).call(this);
